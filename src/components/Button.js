const Button = ({ children, className, onClick }) => {
    return (
        <button
        className={`p-2 rounded-lg hover:ring-2 hover:ring-emerald-500 ${className}`}
        onClick={onClick}>
            {children}
        </button>
    )
}

export default Button