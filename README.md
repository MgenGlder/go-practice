## Running a Go File
To run a go file, execute the following in the terminal:

`go run <name-of-file.go>`

To build a go file, execute the following in the terminal:

`go build -o <name-of-output> <name-of-file.go>`

## Getting Third-Party Go Tools
Many people distribute their Go tools as source code, and have the recipient download and build the tools on their local machine. The command line tool to do this is `go install <location-of-pacakge>`.

For example, to install the `hey` package, you could run the following command in your terminal

`go install github.com/rakyll/hey@latest`

The downloads `hey` and all of its dependencies, builds the program, and installs the binary in your _$GOPATH/bin_ directory.

## Formatting
Go is strict about its stylistic guidelines. There's a standard formatter the comes as part of the go dev tools called `fmt` that will automatically format your code to match these standards. You can run it by executing the following in your terminal: `go fmt`.

## Initializing a module
In order to format your code (amongst other things), you may need to instantiate your disparate collection of go files into a module. This can be done with the `go mod init <name-of-main-file.go>` command. Afterwards, a `go.mod` file should be created in the root of the directory you ran the command in.

## Semicolon Insertion Rule
Note that Go has a Semicolon Insertion Rule™. This means that although semicolons are not required as development type, in contrast to other languages in the C family, they are automatically inserted by the compiler at the end of any relevant line by the compiler. This is part of the reason why following the strict style guidelines is so important when writing Go. This rule is one of the things that makes the Go compiler simpler and faster, while at the same time enforcing a coding style.

## Formatting Imports
There's a really neat tool to ensure your imports follow stying best practices as well called `goimports`. You can install it with the following command: `go install golang.org/x/tools/cmd/goimports@latest`. Once installed, you can run it with the following command:

```go
goimports -l -w .
```

The `-l` flag signifies to print the files with incorrect formatting. The `-w` command signifies to modify the files in place. The `.` specifies the files to be scanned, everything.

## Linting
Remember, `go fmt` formats the code supplied to it, adjusting the spacing and style to match Go styling standards. There is another tool called `golint` that will analyze whether the code under review is following idiomatic Go standards.

You can install this tool with the following command: `go install golang.org/x/lint/golint@latest`. You can then run it with `golint ./...`.
