import { Hash } from "crypto"
import { getName, searchName } from "./src/getName"

main()

function main (): void{
	const { query } = require('express')
	const express = require('express')
	const app = express()
	const port :number = 3000
	
	app.get('/', (req, res) => {
		// let realname : string = getName(req.query["nickname"])
		
		// if (realname){
		// 	res.send(realname)
		// } else {
		// 	res.send("エンジニアにそのニックネームのメンバーはいません")
		// } 
		let serchResult = searchName(req.query["nickname"])
		if (serchResult){
			res.send(serchResult)
		} else {
			res.send("エンジニアにそのニックネームのメンバーはいません")
		}
	})
	
	app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
	})
	
}

