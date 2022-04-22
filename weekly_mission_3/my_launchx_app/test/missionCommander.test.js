const MissionCommander = require('./../app/missionCommander')

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        const result = 1 + 2 
        expect(myMissionCommander.name).toBe("Woopa");
    });
  })