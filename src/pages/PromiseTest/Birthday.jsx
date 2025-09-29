export default function Birtthday() {
    return (
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
    )
}