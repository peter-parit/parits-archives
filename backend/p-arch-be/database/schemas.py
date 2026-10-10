from datetime import datetime
from decimal import Decimal
from typing import Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator


Difficulty = Literal["Beginner", "Intermediate", "Advanced"]
OrderStatus = Literal["pending", "paid", "cancelled", "refunded"]


class ProductRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    slug: str
    name: str
    composer: str
    description: str
    difficulty: Difficulty
    format: Literal["PDF"]
    price: Decimal
    currency: str


class OrderCreate(BaseModel):
    customer_name: str = Field(min_length=1, max_length=200)
    customer_email: EmailStr
    product_ids: list[int] = Field(min_length=1)

    @field_validator("customer_name")
    @classmethod
    def strip_customer_name(cls, value: str) -> str:
        normalized = value.strip()
        if not normalized:
            raise ValueError("Customer name cannot be blank.")
        return normalized

    @field_validator("product_ids")
    @classmethod
    def validate_unique_product_ids(cls, product_ids: list[int]) -> list[int]:
        if any(product_id < 1 for product_id in product_ids):
            raise ValueError("Product IDs must be positive integers.")
        if len(set(product_ids)) != len(product_ids):
            raise ValueError("Each digital score can only appear once per order.")
        return product_ids


class OrderItemRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    product_id: int
    product_name: str
    unit_price: Decimal


class OrderRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    customer_name: str
    customer_email: EmailStr
    status: OrderStatus
    total_amount: Decimal
    currency: str
    created_at: datetime
    items: list[OrderItemRead]