import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../comman/IconBtn";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

export default function VideoSidebar({ setReviewModal }) {
  const { sectionId, subSectionId } = useParams();

  const {
    courseSectionData,
    courseEntireData,
    completedLectures,
    totalLectures,
  } = useSelector((state) => state.viewCourse);

  const navigate = useNavigate();
  const location = useLocation();

  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState();

  // set the active for current video and section highlighted

  useEffect(() => {
    ;( () => {
      // if section is emmpty
      if (!courseSectionData.length) return;

      // current section
      const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
      );

      //current Subsection
      const currentSubsectionIndex = courseSectionData?.[
        currentSectionIndex
      ]?.subSection.findIndex((data) => data._id === subSectionId);

      // active SubSection

      const activeSubSectionId =
        courseSectionData[currentSectionIndex]?.subSection?.[
          currentSubsectionIndex
        ]?._id;

      // set current value
      setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
      setVideoBarActive(activeSubSectionId);
    } )()

  }, [courseSectionData, courseEntireData, location.pathname]);

  // console.log("data",courseEntireData)
  // console.log("section",courseSectionData)
//  console.log("total",totalLectures)
  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
        {/* button Heading  */}
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-200">
          {/* buttons */}
          <div className="flex w-full items-center justify-between ">
            <div
              onClick={() => navigate("/dashboard/enrolled-courses")}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
              title="back"
            >
              <IoIosArrowBack size={30} />
            </div>

            <div>
              <IconBtn
                text={"Add Review"}
                onclick={() => setReviewModal(true)}
                customClasses="ml-auto"
              />
            </div>
          </div>
          {/* heading  */}
          <div className="flex flex-col">
            <p>{courseEntireData.courseName}</p>
            <p className="text-sm font-semibold text-richblack-400">
              {completedLectures?.length}/{totalLectures}
            </p>
          </div>
        </div>

        {/* section and subsection  */}
        <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
          {courseSectionData.map((section, index) => (
            <div
              className="mt-2 cursor-pointer text-sm text-richblack-100"
              onClick={() => setActiveStatus(section?._id)}
              key={index}
            >
              {/* section  */}

              <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                <div className="w-[70%] font-semibold">
                  {section?.sectionName}
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`${
                      activeStatus === section?._id
                        ? "rotate-0"
                        : "rotate-180"
                    } transition-all duration-500`}
                  >
                    <BsChevronDown />
                  </span>
                </div>
              </div>

              {/* subsection Show for only current Setion lecture  */}

              {activeStatus === section?._id && (
                <div className="transition-[height] duration-500 ease-in-out">
                  {section.subSection.map((topic, index) => (
                    <div
                      className={` flex gap-3 px-5 py-2 ${
                        videoBarActive === topic?._id
                          ? " bg-yellow-200 text-richblack-800 font-semibold"
                          : " bg-richblack-900 text-richblack-100"
                      }`}
                      key={index}
                      onClick={() => {
                        navigate(
                          `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${topic?._id}`
                        );
                        setVideoBarActive(topic?._id);
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={completedLectures.includes(topic?._id)}
                        onChange={() => {}}
                      />
                      <span>{topic.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
