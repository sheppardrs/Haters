# Sleep App
Application to display children's sleep data made as part of ENGS89/90. Group 14 for Serta-Simmons Bedding.

# Using
This React Native Application was made using expo. Running ```expo start``` in the ```App_expo_auto``` directory will start the application and give the option of running on an android or iOS simulator.
The Project is kept on github at ```sheppardrs/Haters```.

# Functionality
This section currently describes the goals of the application and will be updated accordingly as progress is made and functionality is definitively added.
The app is the interface to the measurement devices. It will present data about bed-wetting, time of sleep, time spent before falling asleep, and restlessness retrieved from the device or from the server.

## Server
The app uses Google Firebase to store information collected by the device.
### Fetching
The app fetches the nightly data when it is opened for restlessness, bedwetting, and sleep time.
### Pushing
The server pushes alerts to the phone when an event like bedwetting occurs.
### Aggregation
The server aggregates data from the device to create nightly data points out of the minute level data.

## Notifications
The user can set notification preferences for events like bedwetting or staying awake for more than a certain amount of time.
### Push Notifications
In the morning to remind the user to check app.
### Alarm/More disruptive notification
For immediate attention alerts, as defined by the user, for events like bedwetting.

## Information Presentation
Present the data to the user in a useful and hopefully actionable manner. Present weekly (monthly?) graphs, avgs scores, aggregate score (?), and possibly recommendations (?).

# Possible Additions/Problems
## Android google sign on
See the firebase authentication settings -- "need to add a SHA1 fingerprint for each app on your project settings".


# Contributors
Group Members: Emily Chao, Daniel Choe, Lily Hanig, Rachel Martin, Sheppard Somers, and Cristian Vences
Sponsor: JD Velilla
Advisor: Geoffrey Luke
Professors: Ryan Halter, Laura Ray, John Collier
