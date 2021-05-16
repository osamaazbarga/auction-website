import React, { useState } from 'react'

export default function Fileuploadscreen() {
    const [singleFile,setSingleFile]=useState('')
    const [multipleFile,setMultipleFile]=useState('')
    const singleFileChange=(e)=>{
        setSingleFile(e.target.files[0])
    }

    const multipleFileChange=(e)=>{
        setMultipleFile(e.target.files)
    }

    const uploadSingleFile=async()=>{
        console.log(singleFile);
    }

    const uploadMultipleFile=async()=>{
        console.log(multipleFile);
    }
    return (
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Select Single File</label>
                    <input type="file" className="form-control" onChange={(e)=>{singleFileChange(e)}}/>
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={()=>{uploadSingleFile()}}>Upload</button>
                    </div>
                </div>
            </div>

            


            <div className="col-10">

            <div className="row">
                    <div className="col-6">
                        <label>Title</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Select Multiple File</label>
                            <input type="file" className="form-control" multiple onChange={(e)=>{multipleFileChange(e)}}/>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={()=>{uploadMultipleFile()}}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
