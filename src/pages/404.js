import ErrorLayout from "./components/ErrorLayout"
import ErrorPage from "./components/ErrorPage"

export default function Custom404(){
    return(
        <ErrorPage/>
    )
}

Custom404.getLayout = function getLayout(page){
    return(
        <ErrorLayout>
            {page}
        </ErrorLayout>
    )
}