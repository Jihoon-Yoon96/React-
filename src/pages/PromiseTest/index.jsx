import React, { Children, useState } from "react";
import Birtthday from "./Birthday";
import "../../assets/app.css";
import "../../assets/modal.css";

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
    <div className="container">
      <div className="form-box">
        <h2 className="title">회원가입</h2>
        <p className="subtitle">새 계정을 만들어보세요</p>

        {Children}

        <button className="btn full">회원가입</button>
      </div>
    </div>
  );
};

export default App;
