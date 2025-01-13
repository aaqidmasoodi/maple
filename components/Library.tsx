import userAuthModal from "@/hooks/useAuthModal";
import userUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {

    const authModal = userAuthModal();
    const uploadModal = userUploadModal();

    const { user } = useUser();

    const onClick = () => {

        if (!user) {
            return authModal.onOpen();
        }

        // TODO Check for subscription
        
        return uploadModal.onOpen();


    }
 
    return (
        <div className="flex flex-col">
            <div className="
            flex
            items-center
            justify-between
            px-5
            pt-5

            ">
                <div className="
                    inline-flex
                    items-center
                    gap-x-2

                ">
                    <TbPlaylist className="text-neutral-400" size={26}/>
                    <p
                    className="
                        text-neutral-400
                        font-medium
                        text-md
                    "
                    >Library
                    </p>
                </div>
                <AiOutlinePlus
                onClick={onClick}
                size={20}
                className="
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                "
                />
            </div>
            <div className="
                flex
                flex-col
                gap-y-2
                mt-4
                px-3
            ">
                List of Songs!
            </div>
        </div>
    );
}
 
export default Library;