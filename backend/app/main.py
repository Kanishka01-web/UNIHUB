from fastapi import FastAPI

app = FastAPI(
    title="UNIHUB API",
    description="Backend API for the UNIHUB university knowledge and student engagement platform.",
    version="0.1.0",
)


@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "UNIHUB API",
    }