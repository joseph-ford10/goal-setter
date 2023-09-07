function SubmitScreen({ inputData, targetType, handleSubmit }) {
  return (
    <div>
      <h2>Summary</h2>
      <ul>
        <li>Task name: {inputData.task}</li>
        <li>Divided into: {inputData.unitsName}</li>
        <li>
          Total number of {inputData.unitsName}: {inputData.unitsNum}
        </li>
        {targetType === 'dailyTarget' && (
          <li>
            Daily target: {inputData.unitsPerDay} {inputData.unitsName}
          </li>
        )}
        {targetType === 'targetEndDate' && (
          <li>Target end date: {inputData.endDate}</li>
        )}
        <li>Start date: {inputData.startDate}</li>
      </ul>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default SubmitScreen
