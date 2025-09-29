


export default CommonModal = ({title, close, component}) => {
    const ModalComponent = component;
    let modals = useSelector((state) => state.modals);

    if (!modals.length) return null;
    return (
        {modals.map((modal) => (
            <div key={modal.id} className="modal-overlay">
                <div className="modal">
                    <h3>{title}</h3>
                    <ModalComponent {...modal.props} close={() => close(modal.id, null)} />
                    <div className="modal-actions">
                        <button className="btn cancel" onClick={() => close(modal.id, null)}>
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        ))}
    )
}