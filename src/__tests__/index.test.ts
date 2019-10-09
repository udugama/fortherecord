import { 
    displayReport,
    setValues,
    IEnterdNumbers,
    getMessage,
    read,
    orchestrate,
} from './../index'; 

describe('getMessage',() => {
    it('is a function', () => {
        expect(getMessage).toBeInstanceOf(Function);
    });

    it('retuns correct responses', async() => {
        expect(getMessage(0)).toEqual('Please input the number of time in seconds between emitting numbers and their frequency\n');
        expect(getMessage(1)).toEqual('Please enter the first numbery\n');
        expect(getMessage(2)).toEqual('Please enter the next number\n');
        expect(getMessage(3)).toEqual('');
    });
});

describe('read',() => {
    it('is a function', () => {
        expect(read).toBeInstanceOf(Function);
    });

    it('read retuns correct responses with status 0', async() => {
        (orchestrate as any)= jest.fn();
        let error: any;
        const response = await read(0)
            .catch((err) => {
                error = err;
            });
        expect(response).toBeUndefined();
        expect(error).toBeUndefined();
    });

    it('read retuns correct responses with status 1', async() => {
        (orchestrate as any)= jest.fn();
        let error: any;
        const response = await read(1)
            .catch((err) => {
                error = err;
            });
        expect(response).toBeUndefined();
        expect(error).toBeUndefined();
    });

    it('read retuns correct responses with status 2', async() => {
        (orchestrate as any)= jest.fn();
        let error: any;
        const response = await read(2)
            .catch((err) => {
                error = err;
            });
        expect(response).toBeUndefined();
        expect(error).toBeUndefined();
    });
});

describe('setValues',() => {
    it('is a function', () => {
        expect(setValues).toBeInstanceOf(Function);
    });

    it('enterdNumbers set correctly by setValues function', () => {
        let outputData: IEnterdNumbers = [ ];
        outputData['number_1'] = 2;
        outputData['number_3'] = 1;
        outputData['number_13'] = 1;
        let outputData2 = JSON.parse(JSON.stringify(outputData));
        outputData2['number_3'] = 2;
        setValues(3, outputData);
        expect(outputData.keys()).toMatchObject(outputData2.keys());
        expect(outputData['number_3']).toEqual(outputData2['number_3']);
    });
});

describe('displayReport',() => {
    it('is a function', () => {
        expect(displayReport).toBeInstanceOf(Function);
    });

    it('return correct report output ', () => {
        const output: string = '>>  2:1, 3:1, 9:1, 13:1';
        const inputs: Array<number> = [2, 3, 9, 13];
        const enterdData: IEnterdNumbers = [];
        inputs.forEach((input) => enterdData[`number_${input}`] = 1);
        const response = displayReport(enterdData);
        expect(response).toEqual(output);
    });

    it('return correct report output for empty data', () => {
        const output: string = '>> ';
        const inputs: Array<number> = [];
        const enterdData: IEnterdNumbers = [];
        const response = displayReport(enterdData);
        expect(response).toEqual(output);
    });

});
