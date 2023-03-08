import {getStringWithoutHTTP} from "../../utils/string/string";
import React from "react";
import {useActions} from "../../hooks/useActions";

export const usePersonalization = () => {

    const { getRandomImg, deleteImg } = useActions();

    async function handleGetRandomImg(_id: string) {
        await getRandomImg({ _id });
    }
    function handleImgDelete({ e, _id }: {e: React.MouseEvent<HTMLElement>, _id: string}) {
        const element = (e.target as HTMLElement)?.parentNode?.parentNode?.lastChild as HTMLImageElement

        deleteImg({
          _id,
          imageId: getStringWithoutHTTP(element.src),
        });
    }
    
    return {
        handleGetRandomImg,
        handleImgDelete
    }
}