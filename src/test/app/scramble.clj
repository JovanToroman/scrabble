(ns app.scramble
  (:require [clojure.test :refer [deftest testing is are]]
            [app.mutations :refer [scramble?]]))

(deftest scramble-test
  (testing "Strings can only contain lowercase letters and must not be empty"
    (are [str1 str2] (thrown? AssertionError (scramble? str1 str2))
                     "abcABC"  "abc"
                     "123abc"  "abc"
                     "abcdef"  "abcDE"
                     "abcdef"  "abc123"
                     "abc."    "abc"
                     "abc.def" "abc."
                     "abcde,"  "abc,"
                     ""        ""))

  (testing "Basic positive tests"
    (are [str1 str2] (true? (scramble? str1 str2))
                     "rekqodlw" "world"
                     "cedewaraaossoqqyt" "codewars"
                     "takes" "steak"
                     "alfelay" "fly"))

  (testing "Basic negative tests"
    (are [str1 str2] (false? (scramble? str1 str2))
                     "katas" "steak"
                     "abssadrewr" "kite"
                     "retrerwqewq" "imagine"))

  (testing "Length of the first string should be GE than that of the second"
    (is (and (not (scramble? "a" "aa"))
             (scramble? "aa" "aa")
             (scramble? "aaa" "aa"))))

  (testing "We cannot scramble `nil` values"
    (are [str1 str2] (thrown? AssertionError (scramble? str1 str2))
                     nil nil
                     "test" nil
                     nil "test"))

  (testing "We cannot scramble `int` values"
    (are [str1 str2] (thrown? AssertionError (scramble? str1 str2))
                     1 0
                     "test" 1
                     0 "test"))

  (testing "We cannot scramble `double` values"
    (are [str1 str2] (thrown? AssertionError (scramble? str1 str2))
                     1.1 0.0
                     "test" 1.1
                     0.0 "test"))

  (testing "We cannot scramble `boolean` values"
    (are [str1 str2] (thrown? AssertionError (scramble? str1 str2))
                     true false
                     false true
                     "test" true
                     false "test"))

  (testing "Strings with same letters can still be scrambled if number of letters in `str1` is GE than that of `str2`"
    (are [str1 str2] (true? (scramble? str1 str2))
                     "a" "a"
                     "aa" "aa"
                     "aaa" "aa"
                     "bbb" "b"))

  (testing "Even if `str1` contains all the unique letters needed for creating `str2`, it also needs to contain a
   sufficient count of each of the letters"
    (is (and (scramble? "liponpap" "pappilon")
             (not (scramble? "ecarsyoadada" "accessory")))))

  (testing "If `str1` and `str2` are equal, return `true`"
    (is (scramble? "abcde" "abcde")))

  (testing "Ensure efficiency for inputs of length 2000 characters with the worst case scenario where all characters in
  the two string match except for the last character"
    (let [start-time (System/nanoTime)]
      (scramble? "gnznqxkzxaimqhrmmndncrzprwjenfxtxnhjhcangxwurqtkahyqvauhkyndhabwmmdjuhuxurrkaynkxbkbbkgrjibbnwjgwnviwzehdjrpepwrykujtzncaejmanjtkfdygunvnthtezdqtathpwcgvxxyqxzqznpayunuxugqkruemcbwbkhrrwbjgzuvyegbpvqekbeznnrtzguhenujttajqupvngtikgeehuvqicenbnjydqapwtbcrwuupmydrndxbuupthakkvxbkwpwdancivpggbzzbcytrueqhbhkxdegiecefxdfcvfyqvnvcnxcgmmtqdtbdtfbfxrgqteppgabgerhczzxmgpbuwwfywhukretkmehzjckyakwvxmxztavaadnejftnvcvqireggtztdjrvqnkgwrnamcvkqjnxtuacygkwvicjwvwawdhqkdevpkcfmftvtpcwcukgqurmgvgmxwwrezzunzeuewnxhupmadnqnmwxrktrzjkqrvzkeccgmgawuttbduhabfxpdghuxdnfrvvphebmcntdhrpmdrfknxczdkefkqbfudytffquzzkagbmbwxjbpbcmchzcuztwyatnqpreeqayfxjhfhkhcpbkxrttapcxnvjcbwdvbxtbnicxxqrkhpvjhuhymfkrnhhqdgjzzekmvvaptardvxcmrayxjnewxaeygxkdheyrwriiahjybwhwyhkemtrcuyzgpauhquqixxzrzmcbpjarnhhcyyaxynecmhgiceqnpudwxdnmawyqqprpqptvyjmbekufrefefzqewduibpmiazuhzqbkwrciixwumriyrapfdhpnirptddvrgyrvuudmqipftaphwcbprnvbgvqyjmkbppzkbvzpqfzyzcnrvvnqahjvfnhzkmewqcjxvfztgaywbvyfipkewyaauedmmruaqdncfyfgkrpkjmgrbznjdvrftmbqccqhzgzbcpffexknuacvwipxxdjxhfdmbvedcvfexdchhihgahjpgqrtqcxtiubmtybqafdaqiqnvmzwaxqziqgqbwdaxwxjmzzzfibehgvdxhxxbduxcapptbbrgpvjakfiqmuaqfvyvgzncmmekmmxdrvpdjdqitnvaztjxgzryrxcejktvkggrjyytzcuhdiigqivqjwkkeytzmjcgjejwijkqgjzrvixdgfxdiadzhzyckqijjzedjvgcbanbnjinmfcvcyggvfzygpaxyiaxbpyfzmhfeqpdcgryfepdtffymjywttcuhqwnmbamztnvdghwurihjzwhjakxqcatdeqwfpuqejckpptjidpvercuxqdpmyhdpeqravymyatejekbwgqdbbuduakrcfpkrkwwtwtthjdardkfecewtjcezvttbkmdyzmxtxtyyqfubrdzeyxzuqmbfitgpuuewftyvigapfnfeiqnvqzcwcwtxnwyyattnhyrpnfhcbjdmtnwtcwvaeegqmzdjwfxrnnegqnmewyewmhpwccqthwadhpyxczetvtazjktvqqkvqbufzwbraqpnbdbjtqhdhcukhxfagyxmpgjqhyayrgqezcyccwbmcqjvwcpgcqwthrimrqhhqewangqpeyxvxwcjizarhvfeguvbqdmgexfmtwkkdxgafiwruijceprchitqhxqnezjwvqfqrepvquyiktpwuypxyvphqyednfwqbrifrdnybbmazpkfdkuxchjxehdcxajxteavigfvzeqvdrpmptvmwjdnqaxmhjgndpkmiubfggvwvhhhrfhetfwmzrgcnpfzuctttrdapkbxwngrfitbjhwpaznxfjwwxgwirgphdwhkxkkbpvnwieyxghrubmgnakhhjghicmevajyerjyyniezmxggjzwuaieqtfgndurzyxhnyhnnhzejrdqtxctfciqmwhcfbwnjgxahvdgnrzuwhtmuh"
                 "gnznqxkzxaimqhrmmndncrzprwjenfxtxnhjhcangxwurqtkahyqvauhkyndhabwmmdjuhuxurrkaynkxbkbbkgrjibbnwjgwnviwzehdjrpepwrykujtzncaejmanjtkfdygunvnthtezdqtathpwcgvxxyqxzqznpayunuxugqkruemcbwbkhrrwbjgzuvyegbpvqekbeznnrtzguhenujttajqupvngtikgeehuvqicenbnjydqapwtbcrwuupmydrndxbuupthakkvxbkwpwdancivpggbzzbcytrueqhbhkxdegiecefxdfcvfyqvnvcnxcgmmtqdtbdtfbfxrgqteppgabgerhczzxmgpbuwwfywhukretkmehzjckyakwvxmxztavaadnejftnvcvqireggtztdjrvqnkgwrnamcvkqjnxtuacygkwvicjwvwawdhqkdevpkcfmftvtpcwcukgqurmgvgmxwwrezzunzeuewnxhupmadnqnmwxrktrzjkqrvzkeccgmgawuttbduhabfxpdghuxdnfrvvphebmcntdhrpmdrfknxczdkefkqbfudytffquzzkagbmbwxjbpbcmchzcuztwyatnqpreeqayfxjhfhkhcpbkxrttapcxnvjcbwdvbxtbnicxxqrkhpvjhuhymfkrnhhqdgjzzekmvvaptardvxcmrayxjnewxaeygxkdheyrwriiahjybwhwyhkemtrcuyzgpauhquqixxzrzmcbpjarnhhcyyaxynecmhgiceqnpudwxdnmawyqqprpqptvyjmbekufrefefzqewduibpmiazuhzqbkwrciixwumriyrapfdhpnirptddvrgyrvuudmqipftaphwcbprnvbgvqyjmkbppzkbvzpqfzyzcnrvvnqahjvfnhzkmewqcjxvfztgaywbvyfipkewyaauedmmruaqdncfyfgkrpkjmgrbznjdvrftmbqccqhzgzbcpffexknuacvwipxxdjxhfdmbvedcvfexdchhihgahjpgqrtqcxtiubmtybqafdaqiqnvmzwaxqziqgqbwdaxwxjmzzzfibehgvdxhxxbduxcapptbbrgpvjakfiqmuaqfvyvgzncmmekmmxdrvpdjdqitnvaztjxgzryrxcejktvkggrjyytzcuhdiigqivqjwkkeytzmjcgjejwijkqgjzrvixdgfxdiadzhzyckqijjzedjvgcbanbnjinmfcvcyggvfzygpaxyiaxbpyfzmhfeqpdcgryfepdtffymjywttcuhqwnmbamztnvdghwurihjzwhjakxqcatdeqwfpuqejckpptjidpvercuxqdpmyhdpeqravymyatejekbwgqdbbuduakrcfpkrkwwtwtthjdardkfecewtjcezvttbkmdyzmxtxtyyqfubrdzeyxzuqmbfitgpuuewftyvigapfnfeiqnvqzcwcwtxnwyyattnhyrpnfhcbjdmtnwtcwvaeegqmzdjwfxrnnegqnmewyewmhpwccqthwadhpyxczetvtazjktvqqkvqbufzwbraqpnbdbjtqhdhcukhxfagyxmpgjqhyayrgqezcyccwbmcqjvwcpgcqwthrimrqhhqewangqpeyxvxwcjizarhvfeguvbqdmgexfmtwkkdxgafiwruijceprchitqhxqnezjwvqfqrepvquyiktpwuypxyvphqyednfwqbrifrdnybbmazpkfdkuxchjxehdcxajxteavigfvzeqvdrpmptvmwjdnqaxmhjgndpkmiubfggvwvhhhrfhetfwmzrgcnpfzuctttrdapkbxwngrfitbjhwpaznxfjwwxgwirgphdwhkxkkbpvnwieyxghrubmgnakhhjghicmevajyerjyyniezmxggjzwuaieqtfgndurzyxhnyhnnhzejrdqtxctfciqmwhcfbwnjgxahvdgnrzuwhtmuy"
                 )
      (is (< (- (System/nanoTime) start-time) 100000000) ; ensure execution time is lower than 100ms
          ))))