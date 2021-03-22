class testClass:
    def __init__(self):
        self.param = 0

    def change(self):
        self.param += 1


def test(props):
    func = props.get("parent_func")
    func()


obj = testClass()
parent_func = obj.change
test({"parent_func": parent_func})
print(obj.param)
