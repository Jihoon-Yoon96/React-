import React, { useState } from "react";
import {openModalWithPromise} from "../../redux/modules/modals";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    id: "",
    password: "",
    address: "",
    birthday: "",
  });

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [tempAddress, setTempAddress] = useState("");

  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddressConfirm = () => {
    setForm({ ...form, address: tempAddress });
    setIsAddressModalOpen(false);
  };

  // 달력 관련
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
    {/* 이름 */}
        <div className="form-group">
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
          />
        </div>

        {/* ID */}
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={handleChange}
            placeholder="ID를 입력하세요"
          />
        </div>

        {/* 비밀번호 */}
        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        {/* 주소지 */}
        <div className="form-group">
          <label>주소지</label>
          <div className="address-box">
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="주소지를 입력하세요"
            />
            <button className="btn" onClick={() => setIsAddressModalOpen(true)}>
              주소지 찾기
            </button>
          </div>
        </div>

        {/* 생년월일 */}
        <div className="form-group">
          <label>생년월일</label>
          <div className="address-box">
            <input
              type="text"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}
              placeholder="YYYY-MM-DD"
              readOnly
            />
            <button className="btn" onClick={() => setIsCalendarModalOpen(true)}>
              날짜 선택
            </button>
          </div>
        </div>

      {/* 주소 모달 */}
      {isAddressModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>주소지 찾기</h3>
            <input
              type="text"
              value={tempAddress}
              onChange={(e) => setTempAddress(e.target.value)}
              placeholder="예: 서울특별시 강남구 테헤란로 123"
            />
            <div className="modal-actions">
              <button className="btn cancel" onClick={() => setIsAddressModalOpen(false)}>
                취소
              </button>
              <button className="btn" onClick={handleAddressConfirm}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 달력 모달 */}
      {isCalendarModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>날짜 선택</h3>
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
            <div className="modal-actions">
              <button className="btn cancel" onClick={() => setIsCalendarModalOpen(false)}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
