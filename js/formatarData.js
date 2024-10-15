export function formatarData(data){
    //retira os - e separa em variaveis diferentes
    const [ano, mes, dia] = data.split("-")
    //mes -1 pq js trata os meses de 0 a 11 e n de 1 a 12
    return `${dia}/${mes}/${ano}`
}