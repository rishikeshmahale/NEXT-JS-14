export default function ReviewDetail({ params }: {
    params: {
        productId: string,
        reviewId : string
    }
}) {
    
    return (
        <>
            <h2>Reviw {params.reviewId} for product {params.productId}</h2>
        </>
    )
}