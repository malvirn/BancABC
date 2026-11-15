# FastAPI backend

## Setup

From the repository root:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn app.main:app --app-dir backend --reload
```

On Windows, activate with `.venv\\Scripts\\activate`.

Health endpoint: `/api/v1/health`. API documentation: `/docs`.

Configure the Supabase PostgreSQL connection server-side after the project is provisioned. No database schema is created until the BancABC dataset has been inspected.
