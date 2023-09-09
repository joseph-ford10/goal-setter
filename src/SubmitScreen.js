function SubmitScreen({ inputData, targetType, handleSubmit }) {
  return (
    <div className="fadeIn">
      <h2>Summary</h2>
      <ul className="summaryList">
        <li>
          <strong>Task name:</strong> {inputData.task}
        </li>
        <li>
          <strong>Divided into:</strong> {inputData.unitsName}
        </li>
        <li>
          <strong>Total number of {inputData.unitsName}:</strong>{' '}
          {inputData.unitsNum}
        </li>
        {targetType === 'dailyTarget' && (
          <li>
            <strong>Daily target:</strong> {inputData.unitsPerDay}{' '}
            {inputData.unitsName}
          </li>
        )}
        {targetType === 'targetEndDate' && (
          <li>
            <strong>Target end date:</strong> {inputData.endDate}
          </li>
        )}
        <li>
          <strong>Start date:</strong> {inputData.startDate}
        </li>
      </ul>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default SubmitScreen
