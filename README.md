# BancABC Intelligence

BancABC Customer Intelligence & Growth Engine.

The platform will identify churn risk, analyse customer segments and value, surface cross-sell and upsell opportunities, and turn analytical outputs into prioritised actions.

## Confirmed technology

- Frontend: React + TypeScript + Vite
- Backend: Python + FastAPI
- Database platform: Supabase
- Database engine: PostgreSQL
- Data processing: Pandas + NumPy
- Machine learning: Scikit-learn + XGBoost
- Explainable AI: SHAP
- Charts: Recharts
- Frontend hosting: Vercel
- Backend hosting: Render

## Repository structure

- `frontend/`: React application
- `backend/`: FastAPI application
- `.env.example`: local environment variable template

## Run locally

### Backend

From the repository root:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn app.main:app --app-dir backend --reload
```

On Windows, activate with `.venv\\Scripts\\activate`.

The API health check is available at `http://localhost:8000/api/v1/health`. Interactive API documentation is at `http://localhost:8000/docs`.

### Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite starts at `http://localhost:5173`. The frontend checks the backend health endpoint.

## Configuration

Copy `.env.example` to `.env` in the repository root and update values when needed.

Supabase PostgreSQL credentials must remain in the backend environment. Never put database credentials or service-role secrets in frontend variables.

## Data and modelling rule

The actual BancABC competition dataset must be inspected before defining the final database schema, customer features, churn labels, recommendation rules, or model choices. Do not invent fields or eligibility rules. Competition data must remain confidential and only be used as authorised.

## Delivery approach

Follow the development roadmap documented in the project Notion page. Build and test functionality first. Apply the complete visual design system in the final UI phase. Commit directly to `main`; do not create feature branches.
