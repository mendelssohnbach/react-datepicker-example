import { useState } from 'react'

import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja'
import 'react-datepicker/dist/react-datepicker.css'

export const DateChoice = () => {
  const [date, setDate] = useState(new Date())
  registerLocale('ja', ja)

  return (
    <div>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        locale="ja"
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  )
}
