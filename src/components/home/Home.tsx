import { useFetchProducts } from '../../hook/useFetchProducts';
import { useNavigate } from 'react-router-dom';

export function Home() {
	const { products, loading, error } = useFetchProducts();
	const navigate = useNavigate();

	if (loading) return <div>Loading products...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
			{products.map((product) => (
				<div
					key={product.id}
					className="border rounded-lg p-4 shadow hover:shadow-lg transition"
				>
					<img
						src={product.image_url}
						alt={product.title}
						className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
						onClick={() => navigate(`/products/${product.id}`)}
					/>
					<h2 className="text-xl font-bold">{product.title}</h2>
					<p className="text-gray-600 text-sm">{product.description}</p>

					<div className="flex items-center justify-between mt-2 relative">
						<div className="text-lg font-semibold text-blue-600">
							{product.price} $
						</div>
						<div className="flex gap-2 absolute right-4">
							<svg xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								width="30"
								height="20"
								className="relative"
							>
								<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
								width="30"
								height="20"
								className="relative"
							>
								<path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
							</svg>
						</div>
					</div>

				</div>
			))}
		</div>
	);
}
