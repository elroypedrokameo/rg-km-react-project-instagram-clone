// TODO: answer here

import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"



export default function Profile() {
  // TODO: answer here
  const [profileDetail, setProfileDetail] = useState({})
  const { id } = useParams();


  useEffect(() => {
    const getProfileDetail = async () => {
      // const result = getProfile(id)

      // if (result?.status === 200) setProfileDetail(result.data.data) 
    }

    getProfileDetail()
  })

  
  return (
    <div aria-label="Profile">
      <h1 aria-label="Profile-title">Profile</h1>
    </div>
  )
}
