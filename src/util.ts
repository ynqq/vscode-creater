export const getFileName = (path: string) => {
    if(path.includes('/')){
        return path.split("/").pop();
    }else{
        return path.split("\\").pop();
    }
};