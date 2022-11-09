import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Browns Kitchen`;
    }, [title])
}

export default useTitle;