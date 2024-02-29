class Animal {
              constructor(name)
              {
                this.name = name
              } 

              fly()
              {
                alert(" Hello Welcome ")
              }

              get name() 
              {
                return this._name
              }

              set name(newName)
              {
                this._name = newName
              }
          }

          let a = new Animal("Bruno")
          a.fly()
          console.log(a.name)
          a.name = "jack"
          console.log(a.name)
