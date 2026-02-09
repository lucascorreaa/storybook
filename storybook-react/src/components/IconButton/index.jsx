export default function IconButton({        
    src, 
    alt 
}) {
    return (
        <button type="button">
        <img src={src} alt={alt} />
        </button>
    )
}