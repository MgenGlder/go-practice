package main

import (
	"fmt"
	"sort"
	"testing"
)

// Runs benchmarking code borrowed from Dave Cheney's Blog
func main() {
	fmt.Println("Running benchmarkSortStrings..")
	// BenchmarkSortStrings() // TODO: Generate a benchmark test object
}

// BenchmarkSortStrings prints the amount of time it takes to sort a provided string
func BenchmarkSortStrings(b *testing.B) {
	s := []string{"heart", "lungs", "brain", "kidneys", "pancreas"} // := is short variable declaration in go
	b.ReportAllocs()
	fmt.Println(s)
	for i := 0; i < b.N; i++ {
		sort.Strings(s)
	}
}
