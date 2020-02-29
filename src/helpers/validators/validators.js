export const requiredField = value => {
    if(value) {return undefined}

    return 'Field is requered '
}

export const maxLengthCreator = (maxLength) => {
    
    return(value) => {
        console.log(value)
        if(value && value.length > maxLength )  {return `max length equals ${maxLength}` }
        return undefined
    }
}


// export const maxLength50 = value => {
//     if(value && value.length > 50) { return "max length equals 50 symbols" }

//     return undefined
// }