type ID = number |string
const userId: ID= 555
const postId: ID='ssss'
// const otherId: ID=null  - wrong

type Coords = [number, number]
const coords: Coords = [50.5213, 65.6443,]

type ReqStat = "success" |"request"|"error"
const requestStatus:ReqStat = "success"

type CellSize = 2|4|8|16
const cell:CellSize = 4

console.log(userId,postId, coords, requestStatus,cell )

export {}