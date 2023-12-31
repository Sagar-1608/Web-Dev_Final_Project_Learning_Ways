import React from 'react'
import RenderSteps from './RenderSteps'

export default function AddCourse() {
  return (
    <div>
    <div className="flex  md:flex-row flex-col-reverse  w-full md:items-start items-center gap-6">

        <div className="flex flex-1 flex-col items-center md:items-start ">


        <h1 className="mb-14 text-3xl font-medium text-richblack-100">
        
                Add Course
            </h1>

            <div className="flex-1">
                <RenderSteps/>
            </div>
        </div>

        <div className="md:sticky top-10  md:max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 md:xl:block ">
          <p className="mb-8 text-lg text-richblack-100">⚡ Course Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-100">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
    </div>


    </div>
  )
}
