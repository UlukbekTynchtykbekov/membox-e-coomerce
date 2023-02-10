import {QueryClientProvider, QueryClient} from "react-query";
import './App.scss';
import Layout from "../../layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout/>
        </QueryClientProvider>
    )

}

export default App;
