#INFOFILE1.1 - Do not remove this line!
FileIdent = CarMaker-TestSeries 2
FileCreator = CarMaker 7.0pre 2018-4-13 TEMPLATE
Description:
	"The TestSeries including the cross traffic TestRuns. "
	The Series shows the speedvariation of vut and traffic object.
	The start position of the traffic object is set via the script file.
FileClass.Edition = pro
LastChange = 2018-04-13 12:55:26 was
StartTime = 2017-07-11 15:10:22
EndTime = 2017-07-11 15:11:21
ReportTemplate =
Step.0 = Settings
Step.0.Name = Global Settings
Step.0.Param.0 = ScriptFile CM Scripts/Intersection.tcl
Step.0.Param.1 = StartProc CM MyStartProc
Step.1 = TestRun
Step.1.Name = Examples/DriverAssistance/BrakingAssist/AEB_CrossingCarIntersection
Step.1.Param.0 = Speed_vut NValue
Step.1.Param.1 = Speed_TO NValue
Step.1.Crit.0.Name = Collision Detection
Step.1.Crit.0.Description:
Step.1.Crit.0.Good =
Step.1.Crit.0.Warn =
Step.1.Crit.0.Bad = [get Sensor.Collision.Vhcl.Fr1.Count] > 0
Step.1.Var.0.Name = Variation 0
Step.1.Var.0.Param = 40 10
Step.1.Var.1.Name = Variation 1
Step.1.Var.1.Param = 45 10
Step.1.Var.2.Name = Variation 2
Step.1.Var.2.Param = 50 10
Step.1.Var.3.Name = Variation 3
Step.1.Var.3.Param = 40 40
Step.1.Var.4.Name = Variation 4
Step.1.Var.4.Param = 45 40
Step.1.Var.5.Name = Variation 5
Step.1.Var.5.Param = 50 40
Step.2 = TestRun
Step.2.Name = Examples/DriverAssistance/BrakingAssist/AEB_CrossingCyclistIntersection
Step.2.Param.0 = Speed_vut NValue
Step.2.Param.1 = Speed_TO NValue
Step.2.Crit.0.Name = Collision Detection
Step.2.Crit.0.Description:
Step.2.Crit.0.Good =
Step.2.Crit.0.Warn =
Step.2.Crit.0.Bad = [get Sensor.Collision.Vhcl.Fr1.Count] > 0
Step.2.Var.0.Name = Variation 0
Step.2.Var.0.Param = 40 10
Step.2.Var.1.Name = Variation 1
Step.2.Var.1.Param = 45 10
Step.2.Var.2.Name = Variation 2
Step.2.Var.2.Param = 50 10
Step.2.Var.3.Name = Variation 3
Step.2.Var.3.Param = 40 15
Step.2.Var.4.Name = Variation 4
Step.2.Var.4.Param = 45 15
Step.2.Var.5.Name = Variation 5
Step.2.Var.5.Param = 50 15
TS.Speed_TO = 15
TS.TO_Length = 2
