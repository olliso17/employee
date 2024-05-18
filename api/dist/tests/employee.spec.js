import { Employee } from "../src/domain/entities/employee.js";
const employee = new Employee({
    name: "Fábio",
    email: "fabio@gmail.com",
    job_position: "desenvolvedor",
    departament: "TI",
    actions: "sabe tudo"
});
describe("Employee Unit Test", () => {
    it("should throw error name is empty", () => {
        expect(() => {
            new Employee({
                name: "",
                email: "fabio@gmail.com",
                job_position: "desenvolvedor",
                departament: "TI",
                actions: "sabe tudo"
            });
        }).toThrowError("Name is not a valid employee");
    });
    it("should throw error name is blank space", () => {
        expect(() => {
            new Employee({
                name: " ",
                email: "fabio@gmail.com",
                job_position: "desenvolvedor",
                departament: "TI",
                actions: "sabe tudo"
            });
        }).toThrowError("Name is not a valid employee");
    });
    it("should throw error email is empty", () => {
        expect(() => {
            new Employee({
                name: "Fábio",
                email: "",
                job_position: "desenvolvedor",
                departament: "TI",
                actions: "sabe tudo"
            });
        }).toThrowError("Email is not a valid employee");
    });
    it("should throw error email is blank space", () => {
        expect(() => {
            new Employee({
                name: "Fábio",
                email: "    ",
                job_position: "desenvolvedor",
                departament: "TI",
                actions: "sabe tudo"
            });
        }).toThrowError("Email is not a valid employee");
    });
    it("should throw error job_position is empty", () => {
        expect(() => {
            new Employee({
                name: "Fábio",
                email: "fabio@gmail.com",
                job_position: "",
                departament: "TI",
                actions: "sabe tudo"
            });
        }).toThrowError("Job Position is not a valid employee");
    });
    it("should throw error job_position is blank space", () => {
        expect(() => {
            new Employee({
                name: "Fábio",
                email: "fabio@gmail.com",
                job_position: " ",
                departament: "TI",
                actions: "sabe tudo"
            });
        }).toThrowError("Job Position is not a valid employee");
    });
    it("should throw error departament is empty", () => {
        expect(() => {
            new Employee({
                name: "Fábio",
                email: "fabio@gmail.com",
                job_position: "desenvolvedor",
                departament: "",
                actions: "sabe tudo"
            });
        }).toThrowError("Departament is not a valid employee");
    });
    it("should throw error departament is blank space", () => {
        expect(() => {
            new Employee({
                name: "Fábio",
                email: "fabio@gmail.com",
                job_position: "desenvolvedor",
                departament: "  ",
                actions: "sabe tudo"
            });
        }).toThrowError("Departament is not a valid employee");
    });
    it("should throw error actionsis empty", () => {
        expect(() => {
            new Employee({
                name: "Fábio",
                email: "fabio@gmail.com",
                job_position: "desenvolvedor",
                departament: "TI",
                actions: ""
            });
        }).toThrowError("Actions is not a valid employee");
    });
    it("should throw error actions is blank space", () => {
        expect(() => {
            new Employee({
                name: "Fábio",
                email: "fabio@gmail.com",
                job_position: "desenvolvedor",
                departament: "TI",
                actions: "  "
            });
        }).toThrowError("Actions is not a valid employee");
    });
});
//# sourceMappingURL=employee.spec.js.map