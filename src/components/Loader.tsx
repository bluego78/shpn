/* IMPORT CSS */
import '../scss/Loader.scss';

const Loader = (props:any) => {
    return <div className="loader">
                <div className="loader-badge">
                    <div className="spinner-border spinner-border-sm text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="ml-2">Loading...</div>
                </div>
            </div>
}
export default Loader;