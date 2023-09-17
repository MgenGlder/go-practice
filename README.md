# Combined Golang™ and GitHub Actions™ Practice Repo
I've borrowed some notes from a Golang book I'm currently reading. I've also dropped some practice actions I've written that I'm using as practice.

# Table of Contents
## Go
1. [Running a Go File](#running-a-go-file)
2. [Getting Third-Party Go Tools](#getting-third-party-go-tools)
3. [Formatting](#formatting)
4. [Initializing a module](#initializing-a-module)
5. [Semicolon Insertion Rule](#semicolon-insertion-rule)
6. [Formatting imports](#formatting-imports)
7. [Linting](#linting)
8. [Other Linting Tools](#other-linting-tools)
9. [Testing in the Playground](#testing-in-the-playground)
10. [Automatic builds](#automating-builds)
11. [Testing against new versions of go](#testing-against-new-versions-of-go)

## Actions
1. [Running comment-on-label-*](#running-comment-on-label)
2. [How These Actions Work](#how-octokit-actions-work)
3. [What Is Test-Response.json?](#what-is-test-responsejson)

## Running Comment On Label
In order to run [comment-on-label-javascript](./.github/workflows/comment-on-label-javascript.yml) or [comment-on-label-ruby](./.github/workflows/comment-on-label-ruby.yml), you will need to create an issue and attach any label to it. This should kick off an action that should be viewable in the actions tab at the top.

## How These Actions Work
The two actions defined in this repo, [comment-on-label-javascript](./.github/workflows/comment-on-label-javascript.yml) and [comment-on-label-ruby](./.github/workflows/comment-on-label-ruby.yml), are actions that authenticate as an App and make a rest request that generates an issue with a message in the body. They utilize the client id, client secret, private key, and installation id to authenticate as the app and make the request. These values are stored in the environment variables `CLIENT_ID`, `CLIENT_SECRET`, and `PRIVATE_KEY`, respectively, while installation id is hardcoded in the codebase because it is not a secret.

## What Is `test-response.json`?
`test-response.json` is an example response given when making a rest call from the `Octokit` javascript pacakge.

## Running a Go File
To run a go file, execute the following in the terminal:

`go run <name-of-file.go>`

To build a go file, execute the following in the terminal:

`go build -o <name-of-output> <name-of-file.go>`

## Getting Third-Party Go Tools
Many people distribute their Go tools as source code, and have the recipient download and build the tools on their local machine. The command line tool to do this is `go install <location-of-pacakge>`.

For example, to install the `hey` package, you could run the following command in your terminal:

`go install github.com/rakyll/hey@latest`

This downloads `hey` and all of its dependencies, builds the program, and installs the binary in your _$GOPATH/bin_ directory.

## Formatting
Go is strict about its stylistic guidelines. There's a standard formatter that comes as part of the go dev tools called `fmt` that will automatically format your code to match these standards. You can run it by executing the following in your terminal: `go fmt`.

## Initializing a module
In order to format your code (amongst other things), you may need to instantiate your disparate collection of go files into a module. This can be done with the `go mod init <name-of-main-file.go>` command. Afterwards, a `go.mod` file should be created in the root of the directory you ran the command in.

## Semicolon Insertion Rule
Note that Go has a Semicolon Insertion Rule™. This means that although semicolons are not required in development. In contrast to other languages in the C family, they are automatically inserted by the compiler at the end of any relevant line by the compiler. This is part of the reason why following the strict style guidelines is so important when writing Go. This rule is one of the things that makes the Go compiler simpler and faster, while at the same time enforcing a coding style.

## Formatting Imports
There's a really neat tool to ensure your imports follow stying best practices as well called `goimports`. You can install it with the following command: `go install golang.org/x/tools/cmd/goimports@latest`. Once installed, you can run it with the following command:

```go
goimports -l -w .
```

The `-l` flag signifies to print the files with incorrect formatting. The `-w` command signifies to modify the files in place. The `.` specifies the files to be scanned, everything.

Note ‼️ If you're receiving the following error, or something similar:

`zsh: command not found: goimports`

You may need to update your `.bashrc` or `.zshrc` to contain the following path:

`PATH="$PATH:$HOME/go/bin"`

This can be done by first running `vim ~/.zshrc` or `vim ~/.bashrc` if you're on Mac or a Linux-based machine and editing the file from within the Vim editor.

## Linting
Remember, `go fmt` formats the code supplied to it, adjusting the spacing and style to match Go styling standards. There is another tool called `golint` that will analyze whether the code under review is following idiomatic Go standards.

You can install this tool with the following command: `go install golang.org/x/lint/golint@latest`. You can then run it with `golint ./...`. This runs `golint` over the entire project.

## Other Linting Tools
There is another tool whose purpose is to catch syntactically valid errors that mistakes that might not be what you intended to do. One such tool is `vet`, which can be run with the `go vet ./...` command.

You can run a suite of formatting and linting tools with the `golangci-lint` tool. It can be run with the `golangci-lint run` command.

It's recommended to start off using `go vet` as a part of ci, and individually vetting each tool in the `golangci-lint` suite to find the combination that best works for you and your team.

## Testing In The Playground
If you don't have an intergrated development environment set up (or don't want to set one up), you can test-run code in the [online playground](https://play.golang.com/). You can simluate editing different files using the code
`-- otherfile.go --` inbetween the different files.

## Automating Builds
Go developers have opted in general to use `make` and `Makefile`'s as their go-to structure for automating build tasks. 
One drawback of Makefiles is that you need to make sure they are indented properly or they will fail.

## Testing against new versions of Go
Go has made a promise to not introduce breaking changes in any versions starting with the same major version [here](https://go.googlesource.com/proposal/+/master/design/56986-godebug.md#:~:text=Go%201%20introduced%20Go's%20compatibility,and%20certain%20other%20implementation%20overfitting.). That said, mistakes happen so the way to test you code against specific versions of go is with the following:
```
go get golang.org/dl/go.1.15.6
go1.15.6 download
```

You can then build your code against the version with:

`go1.15.6 build`

Once done, you can delete the old version, and replace it with the new version if you want to switch:

```
rm -rf #(go1.15.6 env GOROOT)
rm $(go env GOPATH)/bin/go1.15.6
```