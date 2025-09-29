export default Calendar = () => {
    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const generateCalendar = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = daysInMonth(month, year);

        const weeks = [];
        let days = [];

        // 빈칸 추가
        for (let i = 0; i < firstDay; i++) {
        days.push(null);
        }

        for (let d = 1; d <= totalDays; d++) {
        days.push(d);
        if (days.length === 7) {
            weeks.push(days);
            days = [];
        }
        }
        if (days.length > 0) weeks.push(days);

        return weeks;
    };

    const handleDateClick = (day) => {
        if (!day) return;
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth() + 1;
        const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        setForm({ ...form, birthday: date });
        setIsCalendarModalOpen(false);
    };


    return (
        <>
            <div className="calendar-header">
              <button
                onClick={() =>
                  setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
                }
              >
                ◀
              </button>
              <span>
                {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
              </span>
              <button
                onClick={() =>
                  setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
                }
              >
                ▶
              </button>
            </div>
            <table className="calendar">
              <thead>
                <tr>
                  {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
                    <th key={d}>{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {generateCalendar().map((week, i) => (
                  <tr key={i}>
                    {week.map((day, j) => (
                      <td
                        key={j}
                        className={day ? "day" : "empty"}
                        onClick={() => handleDateClick(day)}
                      >
                        {day || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
        </>
    )
}