export const LoadingMessage = () => {
    return (
        <section
            style={{ height: '100%' }}
            className="alert alert-info text-center d-flex align-items-center justify-content-center"
        >
            <div className="loading-message">
                <p>Loading...</p>
            </div>
        </section>
    );
}