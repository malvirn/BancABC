from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings

app = FastAPI(
    title="BancABC Intelligence API",
    description="API for the BancABC Customer Intelligence & Growth Engine.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)


@app.get("/api/v1/health", tags=["System"])
def health_check() -> dict[str, str]:
    return {
        "status": "ok",
        "service": "BancABC Intelligence API",
        "environment": settings.app_env,
    }


@app.get("/", tags=["System"])
def root() -> dict[str, str]:
    return {
        "name": "BancABC Intelligence API",
        "docs": "/docs",
        "health": "/api/v1/health",
    }
