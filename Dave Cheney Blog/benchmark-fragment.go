package main

import (
	"fmt"
	"sort"
	"testing"
)

func main() {
	fmt.Println("Running benchmarkSortStrings..")
	BenchmarkSortStrings()
}

func BenchmarkSortStrings(b *testing.B) {
	s := []string{"heart", "lungs", "brain", "kidneys", "pancreas"} // := is short variable declaration in go
	b.ReportAllocs()
	fmt.Println(s)
	for i := 0; i < b.N; i++ {
		sort.Strings(s)
	}
}
