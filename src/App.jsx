import { useState } from "react"
import "./App.css"

export default function App() {

  const data = [
    "Step 1: Learn React",
    "Step 2: Earn from Development",
    "Step 3: Invest Your Income"
  ]

  const [step, setStep] = useState(1)

  const previousHandler = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const nextHandler = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <div className="app">

      <div className="card">

        <div className="steps">
          <div className={`circle ${step >= 1 ? "active" : ""}`}>
            1
          </div>

          <div className={`line ${step >= 2 ? "active" : ""}`}></div>

          <div className={`circle ${step >= 2 ? "active" : ""}`}>
            2
          </div>

          <div className={`line ${step >= 3 ? "active" : ""}`}></div>

          <div className={`circle ${step >= 3 ? "active" : ""}`}>
            3
          </div>
        </div>

        <div className="content">
          <span>Current Step</span>
          <h1>{data[step - 1]}</h1>
          <p>Keep learning, keep building, and keep growing.</p>
        </div>

        <div className="buttons">
          <button
            className="previous"
            onClick={previousHandler}
            disabled={step === 1}
          >
            Previous
          </button>

          <button
            className="next"
            onClick={nextHandler}
            disabled={step === 3}
          >
            Next
          </button>
        </div>

      </div>

    </div>
  )
}