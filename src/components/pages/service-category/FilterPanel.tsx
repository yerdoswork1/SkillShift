
interface Props {
    subCategories?: string[],
    selectedSubCategory?: string,
    setSelectedSubCategory?: React.Dispatch<React.SetStateAction<string | undefined>>,
    serviceCategoryId: string
}

export default function FilterPanel({ serviceCategoryId, subCategories, selectedSubCategory, setSelectedSubCategory}: Props) {


    if (!subCategories) {
        return "";
    }

    const changeFilterCategory = (subCategoryName: string) => {
        if (setSelectedSubCategory) {
            setSelectedSubCategory(subCategoryName);
            sessionStorage.setItem(`${serviceCategoryId}-subcategory`, subCategoryName);
        }
    };

    return (
    <div className='flex gap-2 sm:gap-4'>
        {
            subCategories.map((subCategoryName, i) => (
                <button key={i} onClick={() => changeFilterCategory(subCategoryName)} 
                    className={`w-20 sm:w-36 md:w-56 text-xs sm:text-base md:text-xl lg:text-2xl py-2.5 sm:py-4 rounded-md border-1 border-gray-400 cursor-pointer hover:bg-[#F5F5F5] ${selectedSubCategory === subCategoryName ? "bg-[#EDEDED] hover:bg-[#EDEDED]! border-none" : ""}`}
                >{subCategoryName}
                </button>
            ))
        }
    </div>
    )
}
