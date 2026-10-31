---
wiki-ingested: true
title: Python OpenCV YOLO Face Recognition System Report
date: 2026-08-28
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: developer-tooling-clis
type: "source-summary"
aliases:
  - "lab-notes/2026-08-28-Python-OpenCV-YOLO-Face-Recognition-System-Report"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Python OpenCV YOLO Face Recognition System Report
**Clip title:** Teach Python to Recognize Your Face 👀 (OpenCV + YOLO + Live Camera)
**Author / channel:** Python Simplified
**URL:** https://www.youtube.com/watch?v=Z2Ojl7m3JXk

### Summary
This video provides a comprehensive, step-by-step tutorial on building a local, free, and privacy-focused [[concepts/face-recognition|face recognition]] system using Python, OpenCV, and YOLO. The main objective is to enable a computer to identify specific individuals in live camera feeds, differentiating between [[concepts/known-faces|known faces]] and strangers. The presenter emphasizes that the entire process, including training and recognition, occurs on the user's PC without sending any data to cloud services, offering a secure and cost-effective solution.

The tutorial begins by outlining the crucial data preparation steps for training the system. Users are instructed to create a "faces" folder, with individual subfolders for each person to be recognized. Each subfolder should contain approximately 20 photos of the respective person. Key rules for these training photos include having only one face per image, ensuring the photos reflect the camera's intended lighting and angles (with more variety needed for diverse environments), and noting that face size or body appearance isn't critical as faces will be automatically cropped. This meticulous data organization lays the foundation for effective model training, specifically leveraging a pre-trained YOLOv8m-face.pt model for initial face detection within each image.

Following data preparation, the video details the process of training the face recognition model. After detecting faces in the training images using YOLO, the system extracts the bounding box coordinates, crops each face, converts it to grayscale, and resizes it to a uniform 200x200 pixels. These processed faces are then collected into a list, alongside a corresponding list of numerical labels (e.g., 0 for Mariya, 1 for Mario). OpenCV's LBPHFaceRecognizer is then initialized and trained using these faces and labels. To scale for multiple individuals, the system iterates through a dictionary of folder paths, associating each person's folder with a unique numerical label, ensuring all faces are correctly processed and labeled for the recognizer.

### Video Description & Links
#### Description
Detecting a face is one thing. Knowing WHO that face belongs to is a whole different level of skill! 💪 
In this step-by-step Python tutorial, we’ll teach our computer to recognize specific people in a live camera feed using our own photos, Python, OpenCV and YOLO 🐍💻

The best part is everything runs locally — no cloud face-recognition service, no paid API, and all your training photos stay on your computer.

All you need is roughly 20 photos, a webcam and some basic Python skills. By the end of this video, you will have the foundation of your own security system, labeling familiar faces with their names in real-time, and unfamiliar faces with "Unknown".

If you watched my recent Face Detection tutorial - you already have a solid background. If you haven't - don't worry! I'll go over everything here as well (previous tutorial link is below in case you'd like to dive deeper 👇).

📚 What you'll learn 📚

- Prepare face-recognition training photos
- Detect and crop faces with YOLO
- Process faces with OpenCV (grayscale + resize)
- Train an OpenCV LBPH face recognition model on your own photos
- Save and load the trained model
- Recognize multiple faces in real time with a webcam
- Map predicted labels to real names
- Use recognition distance to identify unfamiliar faces as Unknown

🛠️ Tools Used 🛠️

- Python
- OpenCV
- Ultralytics YOLO
- YOLOv8 Face
- OpenCV LBPH Face Recognizer
- NumPy
- Jupyter Lab
- CUDA (Optional)

📹 Tutorials Mentioned In This Video 📹

⭐ Detect Faces with Python (OpenCV + YOLO ): 
https://youtu.be/GhAC0xBIepQ

⭐ Simple Machine Learning with Scikit-Learn:
https://youtu.be/-IvNzmrcyUM

💻 Source Code 💻

https://github.com/MariyaSha/FaceRecognition

The model download link and full environment setup is there!!

⬇️ IMPORTS ⬇️

import os
import cv2
import numpy as np
from ultralytics import YOLO
from IPython.display import display
from PIL import Image

👾 HORRIFIC IMAGE DISPLAY COMMAND 👾
Image.fromarray(photo[:, :, ::-1])

😀 LBPH FACE RECOGNIZER COMMAND 😀
face_recognizer = cv2.face.LBPHFaceRecognizer_create()

✍️ PUT TEXT PLACEHOLDERS COMMAND ✍️
cv2.putText(image, text, (x, y), font, font_size, color, thickness)

🖥️ IMAGE FACE DETECTION CODE @ MINUTE 05:25🖥️
```
folder = "faces/Mariya"
files = os.listdir(folder)

face_model = YOLO("yolov8m-face.pt")

for file in files:
    photo = cv2.imread(folder + "/" + file)

    face_result = face_model(photo, verbose=False)
    processed_image = face_result[0].plot()

Image.fromarray(photo[:, :, ::-1])
```

🖥️ VIDEO FACE DETECTION CODE @ MINUTE 20:18🖥️
```
cap = cv2.VideoCapture(2)

face_model = YOLO("yolov8m-face.pt")

while cv2.waitKey(1) != ord("x"):
    _, frame = cap.read()

    face_result = face_model(frame, verbose=False)
    processed_feed = face_result[0].plot()

    cv2.imshow("my window", processed_feed)

cv2.waitKey(5000)
cap.release()
```

⏰ Timestamps ⏰

00:00 - Face Detection vs Face Recognition
01:11 - Prepare Face Recognition Training Photos
03:22 - Set Up Jupyter Notebook
05:29 - YOLO Face Detection & Cropping
12:18 - OpenCV LBPH Face Recognition
12:54 - Prepare Faces for Recognition
14:53 - Train a Face Recognition Model
16:30 - Save the Trained Face Recognition Model
17:33 - Train Face Recognition on Multiple People
20:19 - Real-Time Face Recognition with Webcam
23:45 - Predict Faces in Real Time
27:31 - Recognize Multiple Faces
28:23 - Convert Labels Into Names
28:47 - Detect Unknown Faces
31:43 - Final Real-Time Face Recognition Demo
32:05 - Thanks for Watching!

🔎 Topics Covered 🔎

Python face recognition
OpenCV face recognition
YOLO face detection
LBPH face recognition
Real-time face recognition
Webcam face recognition
Computer vision with Python
Face recognition security system

#Python #OpenCV #YOLO #FaceRecognition #ComputerVision

#### Tags
`python face recognition`, `face recognition python`, `opencv face recognition`, `yolo face recognition`, `yolo face detection`, `lbph face recognition`, `python opencv`, `computer vision python`, `webcam face recognition`, `real time face recognition`, `face recognition tutorial`, `python computer vision`, `ultralytics yolo`, `yolov8 face`, `cv2 face recognition`

#### URLs
- https://youtu.be/GhAC0xBIepQ
- https://youtu.be/-IvNzmrcyUM
- https://github.com/MariyaSha/FaceRecognition

## Related Concepts
- [[concepts/face-recognition|face recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/Facial_recognition_system)
- [[concepts/stranger-detection|YOLO]]
- [[concepts/stranger-detection|OpenCV]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenCV)
- [[concepts/live-camera-feed|live camera feed]]
- [[concepts/privacy-focused-computing|privacy-focused computing]]
- [[concepts/local-processing|local processing]]
- [[concepts/known-faces|known faces]]
- [[concepts/stranger-detection|stranger detection]]
- face detection — [Wikipedia](https://en.wikipedia.org/wiki/Face_detection)
- bounding box — [Wikipedia](https://en.wikipedia.org/wiki/Minimum_bounding_box)
- image resizing — [Wikipedia](https://en.wikipedia.org/wiki/Image_scaling)
- [[concepts/training-data|model training]] — [Wikipedia](https://en.wikipedia.org/wiki/Training%2C_validation%2C_and_test_data_sets)

## Related Entities
- [[entities/python-simplified|Python Simplified]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- OpenCV — [Wikipedia](https://en.wikipedia.org/wiki/OpenCV)
- HubSpot — [Wikipedia](https://en.wikipedia.org/wiki/HubSpot)
- Mariya — [Wikipedia](https://en.wikipedia.org/wiki/Mariya)
- Mario — [Wikipedia](https://en.wikipedia.org/wiki/Mario)