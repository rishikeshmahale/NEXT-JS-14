// Dynamic routes

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h2>Details About Product {params.productId}</h2>;
}

// every page in next js in app router receives parameters as a props.
// The params object contains the routes objects as a key value pair
// specifying the params types
