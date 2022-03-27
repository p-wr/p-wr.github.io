(* This showcases some deductive synthesis using Coq *)
(* Clearly this is not the ideal environment, but it's familiar *)

Require Import List.
Import ListNotations.

Require Import Bool.

Lemma mklist A (h: A) t : exists l: list A, hd_error l = Some h /\ tl l = t.
Proof.
  exists (h :: t).
  simpl. auto.
Qed.

Lemma mklist' A (h: A) t : exists l: list A, hd_error l = Some h /\ tl l = t.
Proof.
  eexists.
  split.
  - apply hd_error_cons.
  - reflexivity.
Qed.


Inductive vars := a | b | c | d | e.

Lemma vars_eq_dec (v1 v2 : vars) : {v1 = v2} + {v1 <> v2}.
Proof.
  destruct v1, v2.
  (* you really don't want to do all 25 combinations now, do you? *)
  all: (left; reflexivity) || (right; intro H; inversion H).
Qed.

Require Import Extraction.

Extraction vars_eq_dec.

Lemma vars_eq_dec' (v1 v2 : vars) : {b : bool | b = true <-> v1 = v2}.
Proof.
  destruct v1, v2.
  all: (exists true; split; reflexivity) ||
       (exists false; split; intro H; inversion H).
Qed.

Extraction vars_eq_dec'.


From Coq Require Import PeanoNat.
Import Nat.


Lemma eq_dec (m n : nat) : {b : bool | b = true <-> m = n}.
Proof.
  revert m.
  induction n.
  - intro m. destruct m.
    + exists true. tauto.
    + exists false. split; intro H; inversion H.
  - intro m. destruct m.
    + exists false. split; intro H; inversion H.
    + edestruct IHn.
      eexists. Search (S _ = S _). rewrite succ_inj_wd. eassumption.
Qed.

    
Lemma eq_dec' (m n : nat) : {b : bool | b = true <-> m = n}.
Proof.
  revert m.
  induction n.
  all: intro m; destruct m.
  all: try ((exists true; split; reflexivity) ||
            (exists false; split; intro H; inversion H); fail).
  
  edestruct IHn. eexists; rewrite succ_inj_wd. eassumption.
Qed.

Extraction eq_dec'.