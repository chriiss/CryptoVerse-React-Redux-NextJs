const useTagDelete = (value) => {
    return value.replace(/<\/?[^>]+>/gi, '');
}

export default useTagDelete;