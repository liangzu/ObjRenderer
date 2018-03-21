cmake_minimum_required(VERSION 3.7)
project(ObjRenderer)
set(CMAKE_CXX_STANDARD 14)

set(SOURCE_FILES genViewsShapenet.h ImageUtils.h main.cpp makeMaterial.cpp Viewer.cpp tiny_obj_loader.h
        ObjRenderer.cpp ObjRenderer.h ShaderData.cpp ShaderData.h ShaderUtils.h Viewer.h)


find_package(OpenCV REQUIRED)
include_directories( ${OpenCV_INCLUDE_DIRS} )

find_package(OpenGL REQUIRED)
find_package(GLUT REQUIRED)
find_package(GLEW REQUIRED)
include_directories( ${OPENGL_INCLUDE_DIRS}  ${GLUT_INCLUDE_DIRS} ${GLEW_INCLUDE_DIRS})


add_executable(ObjRenderer ${SOURCE_FILES})

target_link_libraries(ObjRenderer ${OpenCV_LIBS})
target_link_libraries(ObjRenderer ${OPENGL_LIBRARIES} ${GLUT_LIBRARY} ${GLEW_LIBRARIES})
target_link_libraries(ObjRenderer freeimage freeimageplus)
